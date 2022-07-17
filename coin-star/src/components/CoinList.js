import React, { useEffect, useState } from 'react'
import coinGecko from '../APIs/coinGecko'

const CoinList = () => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: "bitcoin,ethereum,frax,frax-share,frax-price-index,frax-price-index-share,convex-curve,ethereum-name-service"
                 }
            })
            console.log(response);
        }
        fetchData()
    }, [])

    return (
        <div>

        </div>
    )
}

export default CoinList