function Pricing(){
    return(
        <>
        <div className="pricing-title">
            Affordable Prices
        </div>
        <div className="price-cards">
            <div className="card">
                <div className="card-title">
                    Free
                </div>
                <div className="card-price">
                    <div className="price">Free</div>
                    <div className="per">Forever</div>
                </div>
                <div className="facilities">
                    <li className="facility">3 sport activity</li>
                    <li className="facility">60 days track record</li>
                    <li className="facility dead">Cloud Backup</li>
                    <li className="facility dead">Ads Removed</li>
                    <li className="facility dead">Analytical Result</li>
                </div>
                <button className="card-button">Select Now</button>
            </div>
        </div>
        </>
    )
}
export default Pricing;