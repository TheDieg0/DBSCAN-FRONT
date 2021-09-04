import React from "react";

export const Metrics = (props) => {

    return (

        <div className="col-md-3 card" style={{ width: "18rem" }}>
            <div className="card-header">
                Métricas
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Coeficiente: ${props.metricas.Coefficient}`}</li>
                <li className="list-group-item">{`Clusters: ${props.metricas.n_clusters}`}</li>
                <li className="list-group-item">{`Outliers: ${props.metricas.n_noise}`}</li>
            </ul>
        </div>


    )
}