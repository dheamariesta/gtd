import React from "react";

export class Vision extends React.Component {
    render(){
        return(
            <div className="row flex-center">
                <div className="col-md-12 vision-container">
                    <img src="/images/vision.jpg" alt="vision" className="img-responsive" />
                    <div className="vision-box">
                        <h1 className="title">Visi Kami</h1>
                        <p className="vision">
                            "Sebagai gerbang penyambutan pelajar Indonesia baru di NTU"
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}