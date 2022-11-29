function About(){
    return (
        <>
        <div className="about">
            <div className="about-row">
                <div className="description">
                    <div className="description-title">
                        What is AppStrom
                    </div>
                    <div className="description-details">
                    Vivamus fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue, egestas egestas purus diam at felis. Nullam tellus turpis, molestie ac urna quis, pulvinar semper massa.Nam tristique Sed nisl justo, commodo ac gravida vitae, sodales maximus erat. Phasellus euismod nunc metus, et posuere elit venenatis eget. Nunc non risus libero.
                    </div>
                    <div className="download-button">Download App</div>
                </div>
                <div className="description-img">
                    <img src="#" alt="" className="des" />
                </div>
            </div>
            <div className="about-row">
                <div className="features">
                    <div className="features-img">
                        <img src="#" alt="" className="feature" />
                    </div>
                    <div className="features-description">
                        <div className="features-title">
                            Feature
                        </div>
                        <div className="features-details">
                        Vivamus fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue.
                        </div>
                        <div className="features-list">
                            <div className="features-list-items">
                                <div className="list-item">
                                    <p className="list-title">Real Time Statistics</p>
                                    <p className="list-details">Proin dapibus augue vitae massa placerat, vitae pulvinar lectus sodales. Suspendisse lobortis justo sed sapien placerat eleifend.</p>
                                </div>
                                <div className="list-item">
                                    <p className="list-title">Beautiful Chart</p>
                                    <p className="list-details">Proin dapibus augue vitae massa placerat, vitae pulvinar lectus sodales. Suspendisse lobortis justo sed sapien placerat eleifend.</p>
                                </div>
                                <div className="list-item">
                                    <p className="list-title">Activity Reminder</p>
                                    <p className="list-details">Proin dapibus augue vitae massa placerat, vitae pulvinar lectus sodales. Suspendisse lobortis justo sed sapien placerat eleifend.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;