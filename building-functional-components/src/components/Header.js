
function Header({ theme }) {
    return (
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <div>
                        <img alt="SVCC Home Page"
                            src="/images/SVCCLogo.png" />
                    </div>
                    <div className="light">
                        <h4 className="header-title">
                            Silicon Savannah Code Camp
                        </h4>
                    </div>
                    <div className={theme === "light" ? "text-dark" : "text-info"}>
                        Hello Mr. Jackson! &nbsp;&nbsp;
                        <span>
                            <a href="#">Sign-Out</a>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;
