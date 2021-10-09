import React from 'react'

export function usePriceFormatter(price) {

    console.log("Number Formatter", price);


    let number = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);

    return (
        <React.Fragment>
            {number}
        </React.Fragment>
    )
}