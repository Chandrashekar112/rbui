const pool = require("../modules/pool");

const getRetailer = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured",
  };
  await pool.connect(function (err) {
    if (err) throw err;
    pool.query(
      "SELECT * FROM rb.retailer_setting2 ORDER BY company_id ASC",
      (error, results) => {
        if (error) {
          throw error;
        }
        returnMessage.isError = false;
        returnMessage.message = "Records found";
        returnMessage.data = results.rows;
        res.status(200).json(returnMessage);
      }
    );
  });
};

const RetailerState = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured",
  };

  await pool.connect(function (err) {
    if (err) throw err;
    pool.query(
      "SELECT distinct retailer_state FROM rb.retailer_setting2",
      (error, results) => {
        if (error) {
          throw error;
        }
        returnMessage.isError = false;
        returnMessage.message = "Records found";
        returnMessage.data = results.rows;
        res.status(200).json(returnMessage);
      }
    );
  });
};

const CreateRetailer = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured",
  };

  const {
    retailer_name,
    retailer_state,
    include_tax,
    include_ccfee,
    shipping_cost_ground,
    shipping_cost_2day,
    shipping_cost_overnight,
    rb_percent_sales,
    retailer_percent_sales,
    credit_card_fee_percent,
    shipping_fedex,
    shipping_non_fedex,
    retailer_contrib_free_ship,
    dw_contrib_free_ship,
    company_id,
  } = req.body;
  await pool.connect(function (err) {
    if (err) throw err;
    pool.query(
      "INSERT INTO rb.retailer_setting2 (retailer_name, retailer_state,ccfee_calc_method,include_tax,include_ccfee,shipping_cost_ground,shipping_cost_2day,shipping_cost_overnight,rb_percent_sales,retailer_percent_sales,credit_card_fee_percent,shipping_fedex,shipping_non_fedex,retailer_contrib_free_ship,dw_contrib_free_ship,company_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)",
      [
        retailer_name,
        retailer_state,
        "ORDERTOTAL",
        include_tax,
        include_ccfee,
        shipping_cost_ground,
        shipping_cost_2day,
        shipping_cost_overnight,
        rb_percent_sales,
        retailer_percent_sales,
        credit_card_fee_percent,
        shipping_fedex,
        shipping_non_fedex,
        retailer_contrib_free_ship,
        dw_contrib_free_ship,
        company_id,
      ],
      (error, results) => {
        if (error) {
          throw error;
        }
        returnMessage.isError = false;
        returnMessage.message = "Successfully save the retailer";
        returnMessage.data = results.rows;
        res.status(200).json(returnMessage);
      }
    );
  });
};

const UpdateRetailer = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured",
  };

  const id = parseInt(req.params.id);

  const {
    retailer_name,
    retailer_state,
    include_tax,
    include_ccfee,
    shipping_cost_ground,
    shipping_cost_2day,
    shipping_cost_overnight,
    rb_percent_sales,
    retailer_percent_sales,
    credit_card_fee_percent,
    shipping_fedex,
    shipping_non_fedex,
    retailer_contrib_free_ship,
    dw_contrib_free_ship,
    company_id,
  } = req.body;
  await pool.connect(function (err) {
    if (err) throw err;
    pool.query(
      "UPDATE rb.retailer_setting2 SET retailer_name=$1, retailer_state=$2,ccfee_calc_method=$3,include_tax=$4,include_ccfee=$5,shipping_cost_ground=$6,shipping_cost_2day=$7,shipping_cost_overnight=$8,rb_percent_sales=$9,retailer_percent_sales=$10,credit_card_fee_percent=$11,shipping_fedex=$12,shipping_non_fedex=$13,retailer_contrib_free_ship=$14,dw_contrib_free_ship=$15,company_id=$16 WHERE id=$17",
      [
        retailer_name,
        retailer_state,
        "ORDERTOTAL",
        include_tax,
        include_ccfee,
        shipping_cost_ground,
        shipping_cost_2day,
        shipping_cost_overnight,
        rb_percent_sales,
        retailer_percent_sales,
        credit_card_fee_percent,
        shipping_fedex,
        shipping_non_fedex,
        retailer_contrib_free_ship,
        dw_contrib_free_ship,
        company_id,
        id,
      ],
      (error, results) => {
        if (error) {
          throw error;
        }
        returnMessage.isError = false;
        returnMessage.message = `Successfully Updated the retailer${id}`;
        returnMessage.data = results.rows;
        res.status(200).json(returnMessage);
      }
    );
  });
};

// const filterRetailer = async (req, res) => {
//   const returnMessage = {
//     isError: true,
//     data: null,
//     message: "Error occured",
//   };

//   // let company_id = parseInt(req.params.company_id);
//   await pool.connect(function (err) {
//     if (err) throw err;
//     pool.query(
//       "SELECT * FROM rb.retailer_setting WHERE company_id=$1",
//       [req.params.company_id],
//       (error, results) => {
//         if (error) {
//           throw error;
//         }
//         returnMessage.isError = false;
//         returnMessage.message = "Records found";
//         returnMessage.data = results.rows;
//         res.status(200).json(returnMessage);
//       }
//     );
//   });
// };

// select * from rb.retailer_setting where company_id=128450 OR retailer_state='CT';

module.exports = {
  getRetailer,
  RetailerState,
  CreateRetailer,
  UpdateRetailer,
};
