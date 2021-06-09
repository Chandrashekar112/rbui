const RetailerSettingValidation = {
  company_id: {
    required: {
      value: true,
      message: "Company id is required.",
    },
    pattern: {
      value: /^[0-9]+$/,
      message: "Only numbers allowed.",
    },
  },
  retailer_name: {
    required: {
      value: true,
      message: "Retailer name is required.",
    },
    pattern: {
      value: /^[a-zA-Z][a-zA-Z\s]*$/,
      message: "Only Uppercase and lowercase letters allowed.",
    },
    minLength: {
      value: 3,
      message: "Enter mim 3 letters",
    },
    maxLength: {
      value: 60,
      message: "Enter max 60 letters",
    },
  },
  retailer_state: {
    required: {
      value: true,
      message: "Retailer state is required.",
    },
  },

  shipping_cost_ground: {
    required: {
      value: true,
      message: "Shipping cost ground is required.",
    },
    pattern: {
      value: /^(\-)?([\d]*(?:\.\d{1,2})?)$/,
      message: "Only numbers allowed.",
    },
    maxLength: {
      value: 100,
      message: "Enter maxlength 100",
    },
  },
  shipping_cost_2day: {
    required: {
      value: true,
      message: "Shipping cost 2day is required.",
    },
    pattern: {
      value: /^(\-)?([\d]*(?:\.\d{1,2})?)$/,
      message: "Only numbers allowed.",
    },
    maxLength: {
      value: 100,
      message: "Enter maxlength 100",
    },
  },
  shipping_cost_overnight: {
    required: {
      value: true,
      message: "Shipping cost overnight is required.",
    },
    pattern: {
      value: /^(\-)?([\d]*(?:\.\d{1,2})?)$/,
      message: "Only allowed numbers.",
    },
    maxLength: {
      value: 100,
      message: "Enter maxlength 100",
    },
  },
  rb_percent_sales: {
    required: {
      value: true,
      message: "Rb percent sales is required.",
    },
    pattern: {
      value: /^(\-)?([\d]*(?:\.\d{1,2})?)$/,
      message: "Only numbers allowed.",
    },
    maxLength: {
      value: 100,
      message: "Enter maxlength 100",
    },
  },
  retailer_percent_sales: {
    required: {
      value: true,
      message: "Retailer percent sales is required.",
    },
    pattern: {
      value: /^(\-)?([\d]*(?:\.\d{1,2})?)$/,
      message: "Only numbers allowed.",
    },
    maxLength: {
      value: 100,
      message: "Enter maxlength 100",
    },
  },
  credit_card_fee_percent: {
    required: {
      value: true,
      message: "Credit card fee percent is required.",
    },
    pattern: {
      value: /^(\-)?([\d]*(?:\.\d{1,2})?)$/,
      message: "Only numbers allowed.",
    },
    maxLength: {
      value: 100,
      message: "Enter maxlength 100",
    },
  },
  shipping_fedex: {
    required: {
      value: true,
      message: "Shipping fedex is required.",
    },
    pattern: {
      value: /^(\-)?([\d]*(?:\.\d{1,2})?)$/,
      message: "Only numbers allowed.",
    },
    maxLength: {
      value: 100,
      message: "Enter maxlength 100",
    },
  },
  shipping_non_fedex: {
    required: {
      value: true,
      message: "Shipping non fedex is required.",
    },
    pattern: {
      value: /^(\-)?([\d]*(?:\.\d{1,2})?)$/,
      message: "Only numbers allowed.",
    },
    maxLength: {
      value: 100,
      message: "Enter maxlength 100",
    },
  },
  retailer_contrib_free_ship: {
    required: {
      value: true,
      message: "Retailer contrib free ship is required.",
    },
    pattern: {
      value: /^(\-)?([\d]*(?:\.\d{1,2})?)$/,
      message: "Only numbers allowed.",
    },
    maxLength: {
      value: 100,
      message: "Enter maxlength 100",
    },
  },
  dw_contrib_free_ship: {
    required: {
      value: true,
      message: "Dw contrib free ship is required.",
    },
    pattern: {
      value: /^(\-)?([\d]*(?:\.\d{1,2})?)$/,
      message: "Only numbers allowed.",
    },
    maxLength: {
      value: 100,
      message: "Enter maxlength 100",
    },
  },
};

export default RetailerSettingValidation;
