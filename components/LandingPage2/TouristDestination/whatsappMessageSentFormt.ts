export const TouristDestinationMessage =  (selected:Record<number, string>) => `Hello,

I visited your Tourist Visa website.

I would like assistance for the following destination(s):

${Object.values(selected)
  .map((country) => `• ${country}`)
  .join("\n")}

Please guide me regarding:

• Eligibility
• Required Documents
• Processing Time
• Visa Fees

Thank you.`;