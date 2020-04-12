import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EstimatorForm from "./EstimatorForm";
import { Redirect } from "react-router-dom";
import Estimator from "../../estimator"
import { toast } from "react-toastify";


export const EstimatorPage = () => {
    const [estimator, setEstimator] = useState({
        region: {
            name: "Africa",
            avgAge: 19.7,
            avgDailyIncomeInUSD: 5,
            avgDailyIncomePopulation: 0.71
        },
        periodType: "",
        timeToElapse: "",
        reportedCases: "",
        population: "",
        totalHospitalBeds: ""
    });
    const [errors, setErrors] = useState({});
    const [Values, setValues] = useState({});
    const [redirect, setRedirect] = useState(false);
    const [saving, setSaving] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEstimator(prevEstimator => ({
            ...prevEstimator,
            [name]: value
        }))
        
    }
    const formIsValid = () => {
        const { periodType,
                timeToElapse,
                reportedCases,
                population,
                totalHospitalBeds
        } = estimator;
        const errors = {};

        if (!periodType) errors.periodType = "Period type is required";
        if (!timeToElapse) errors.timeToElapse = "Estimated time is required";
        if (!reportedCases) errors.reportedCases = "Reported cases is required";
        if (!population) errors.population = "Population is required";
        if (!totalHospitalBeds) errors.totalHospitalBeds = "Total hospital beds is required";

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;
    }
    const handleSave = (event) => {
        event.preventDefault();
        if (!formIsValid()) return;
        setSaving(true);
        const data = {};
        Object.assign(data, estimator);
        data.population = parseInt(data.population);
        data.reportedCases = parseInt(data.reportedCases);
        data.totalHospitalBeds = parseInt(data.totalHospitalBeds);
        data.timeToElapse = parseInt(data.timeToElapse);
        const returnResult = Estimator(data)
        setValues({...returnResult})
        console.log(returnResult);
        setTimeout(() => {
            toast.success("Estimator data result.");
            setRedirect(true);
        }, 2000)
    }
    return (
        <div id="main-form">
            <h2 id="h3-form" className="text-danger my-2">Estimator Form</h2>
            <EstimatorForm 
            estimator={estimator} 
            errors={errors}  
            onChange={handleChange}
            onSave={handleSave}
            saving={saving}
            />
            {redirect && <Redirect to={{pathname: '/result', state: Values}}
            />}
        </div>
    )
}

// EstimatorPage.propTypes = {
//     history: PropTypes.object.isRequired,
//     returnResult: PropTypes.object.isRequired
// }

export default EstimatorPage;



