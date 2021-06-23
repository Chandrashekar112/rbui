const SupplierBrandsValidation = {
    supplier: {
        required: {
          value: true,
          message: "Supplier name is required.",
        },
        pattern: {
          value: /^[a-zA-Z0-9][a-zA-Z0-9\s]*$/,
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
}

export default SupplierBrandsValidation;