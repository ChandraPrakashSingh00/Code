const Counter = require("../models/Counter");

/*
============================================================
  GENERATE NEXT CERTIFICATE ID
  Format: CPS/<year>/INT/<3-digit sequence>
  Example: CPS/2026/INT/001
============================================================
*/

const getNextCertificateId = async () => {
  const year = new Date().getFullYear();

  const key = `certificate-${year}`;

  const counter = await Counter.findOneAndUpdate(
    { key },
    { $inc: { value: 1 } },
    { new: true, upsert: true }
  );

  const sequence = String(counter.value).padStart(3, "0");

  return `CPS/${year}/INT/${sequence}`;
};

module.exports = getNextCertificateId;
