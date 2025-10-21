import "./BrandValue.css"
import brandValue from "../../assets/etcImg/brandValue.jpg"

// 
function BrandValue() {

    return (
        <div className="brandValue-section">
            <div className="brandValue-content-container">
                <div className="brandValue-text-block">
                    <h2 className="brandValue-title">WE ARE ALWAYS <br /> brandValue:</h2>
                    <p className="brandValue-description">
                        We take pride in sharing our journey of excellence and commitment to our customers. We showcase our achievements, innovations, and the values that drive us forward. It's more about our dedication to quality, sustainability, and creating positive impacts in the communities we serve.
                    </p>
                </div>

                <div className="brandValue-attributes">
                    <div className="attribute-item">
                        <span className="attribute-text">VALUE01</span>
                        <span className="attribute-icon">✓</span>
                    </div>
                    <div className="attribute-item">
                        <span className="attribute-text">VALUE02</span>
                        <span className="attribute-icon">✓</span>
                    </div>
                    <div className="attribute-item">
                        <span className="attribute-text">VALUE03</span>
                        <span className="attribute-icon">✓</span>
                    </div>
                    <div className="attribute-item">
                        <span className="attribute-text">VALUE04</span>
                        <span className="attribute-icon">✓</span>
                    </div>
                    <div className="attribute-item">
                        <span className="attribute-text">VALUE05</span>
                        <span className="attribute-icon">✓</span>
                    </div>
                </div>
            </div>

            <div className="brandValue-image-container">
                <img
                    src={brandValue}
                    alt="Fresh fruits being washed"
                    className="brandValue-main-image"
                />
            </div>
        </div>
    )
}

export default BrandValue;