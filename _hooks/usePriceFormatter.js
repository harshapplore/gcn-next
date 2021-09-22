import React from 'react'

export function usePriceFormatter(price) {

    let number = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(price);

    return (
        <React.Fragment>
            {number}
        </React.Fragment>
    )
}