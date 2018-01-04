import React from "react";

export class Mission extends React.Component {
    render(){
        return(
            <div className="row mission-bg full-height-screen flex-center">
                <div className="col-md-12">
                    <div className="about-box">
                        <h1 className="title">Misi Kami</h1>
                        <div className="mission-container clearfix">
                            <div className="col-md-3 col-xs-12 mission-item">
                                <img src="/images/ball.svg" alt="ball" className="img-responsive logo"/>
                                <p>
                                    Menjadikan GTD yang menyenangkan dan kokoh dan terorganisir
                                </p>
                            </div>
                            <div className="col-md-3 col-xs-12 mission-item">
                                <img src="/images/relationship.svg" alt="ball" className="img-responsive logo"/>
                                <p>
                                    Mempersatukan hubungan antara freshie dan freshie, senior dan senior, freshie dan senior melalui GTD.

                                </p>
                            </div>
                            <div className="col-md-3 col-xs-12 mission-item">
                                <img src="/images/improve.png" alt="ball" className="img-responsive logo"/>
                                <p>
                                    Menjadikan sarana pengembangan diri bagi seluruh komite dan peserta GTD
                                </p>
                            </div>
                            <div className="col-md-3 col-xs-12 mission-item">
                                <img src="/images/merlion.svg" alt="ball" className="img-responsive logo"/>
                                <p>
                                    Mengenalkan freshie kepada kehidupan dan budaya di Singapura
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}