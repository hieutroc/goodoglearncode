import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-kxd472Frvpar40YZtXqTsevC",
  apiKey: process.env.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,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
