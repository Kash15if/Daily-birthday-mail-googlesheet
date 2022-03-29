const schedule = require("node-schedule");
const postData = require("./Services/postDataToCentral");
const getDatafromDb = require("./Services/getDataFromDb");

const job = schedule.scheduleJob("*/1 * * * *", async function () {
  //posting all data to central server one by one
  //   const meterWiseConsumption = await getDatafromDb(
  //     "SELECT  [Name],[Subject],[Percent] FROM [test].[dbo].[Query_Bar_Graph_ThingWorx]"
  //   );
  //   const sectionWiseConsumption = await getDatafromDb(
  //     "SELECT  [Name],[Subject],[Percent] FROM [test].[dbo].[Query_Bar_Graph_ThingWorx]"
  //   );
  //   const SectionWiseProduction = await getDatafromDb(
  //     "SELECT  [Name],[Subject],[Percent] FROM [test].[dbo].[Query_Bar_Graph_ThingWorx]"
  //   );
  const MeterSectionWiseMapping = {
    meterData: [
      ["2022-03-16 10:14:48.307", "TBS1 Assy Line-2 (2/B)", 9.0],
      ["2022-03-16 10:14:48.307", "TBS1 Assy Line-2 (2/B)", 7.0],
      ["2022-03-16 10:14:48.307", "TBS1 Assy Line-2 (2/B)", 6.0],
    ],
  };

  //   console.log(meterWiseConsumption);
  //   console.log(sectionWiseConsumption);
  //   console.log(SectionWiseProduction);
  //   console.log(MeterSectionWiseMapping);
  const meterConRes = await postData(
    "http://localhost:3001/shyamnagar/meterwiseconsumption",
    MeterSectionWiseMapping,
    "15minSlot"
  );
  const sectionConRes = await postData(
    "http://localhost:3001/shyamnagar/meterwiseconsumption",
    MeterSectionWiseMapping,
    "15minSlot"
  );
  //   const sectionProdRes = await postData("15minDataURL", Data4_15);
  //   const meterSecMapRes = await postData("15minDataURL", Data4_15);
});

module.exports = job;
