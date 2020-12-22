/* eslint-disable @typescript-eslint/camelcase */

export default async ({ method, body: { email, name } }, res) => {
  if (method === "POST") {
    if (!email || !name) {
      return res.status(400).json({ error: "Email and name are required" });
    }

    try {
      const { MAILCHIMP_LIST_ID, MAILCHIMP_API_KEY, VERCEL_ENV } = process.env;
      const DATACENTER = MAILCHIMP_API_KEY.split("-")[1];
      const tags = VERCEL_ENV === "production" ? ["prod"] : ["dev"];

      const data = {
        email_address: email,
        tags,
        merge_fields: {
          FNAME: name,
        },
        // it turns on opt-in subscription
        status: "pending",
      };

      const apiResponse = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
        {
          body: JSON.stringify(data),
          headers: {
            Authorization: `apikey ${MAILCHIMP_API_KEY}`,
            "Content-Type": "application/json",
          },
          method: "POST",
        },
      );

      const response = await apiResponse.json();

      if (response.status >= 400) {
        return res.status(400).json({
          error: `There was an error subscribing to the newsletter.`,
          title: response.title,
          details: response.detail,
          status: response.status,
        });
      }

      return res.sendStatus(201);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message || error.toString() });
    }
  }

  return res.status(405).json({ error: "This endpoint requires POST method" });
};
