export const productTypesObject = {
    Dvd:{
        attribute: "Size",
        units: "MB",
        inputs: ["Size"],
        description: "Please provide size of DVD in MB.",
        productType: "Dvd"
    },
    Book:{
        attribute: "Weight",
        units: "KG",
        inputs: ["Weight"],
        description: "Please provide weight of book in KG.",
        productType: "Book"
    },
    Furniture: {
        attribute: "Dimension",
        units: "CM",
        inputs: ["Height", "Width", "Length"],
        description: "Please provide dimensions of furniture in CM.",
        productType: "Furniture"
    }
}

export const inputTypeHandler = (changedValue, productTypes, cb) => {
    const currentType = changedValue.target.value
    cb(productTypes[currentType])
}