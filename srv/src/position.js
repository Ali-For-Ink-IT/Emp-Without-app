const { getService } = require("./util/serviceOperation");
const getPositionsDetails = async (req) => {
  const oSrv = await getService("sf_api_service");
  console.log("inside position==>", oSrv.tx(req).run(req.query));

  return oSrv.tx(req).run(req.query);
};

module.exports = { getPositionsDetails };
