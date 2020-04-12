import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const EstimatorForm = ({
  estimator,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  const { 
    periodType,
    timeToElapse,
    reportedCases,
    population,
    totalHospitalBeds
  } = estimator;
  return (
    <form onSubmit={onSave}>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave} 
        </div>
      )}
      <TextInput
        name="population"
        label="Population"
        value={population}
        onChange={onChange}
        data-population
        error={errors.population}
      />

      <TextInput
        name="timeToElapse"
        label="Estimated Time"
        data-time-to-elapse
        value={timeToElapse}
        onChange={onChange}
        error={errors.timeToElapse}
      />

      <TextInput
        name="reportedCases"
        label="Reported Cases"
        data-reported-cases
        value={reportedCases}
        onChange={onChange}
        error={errors.reportedCases}
      />

      <TextInput
        name="totalHospitalBeds"
        label="Total Hospital Beds"
        data-total-hospital-beds
        value={totalHospitalBeds}
        onChange={onChange}
        error={errors.totalHospitalBeds}
      />

      <SelectInput
        name="periodType"
        label="Period Type"
        value=""
        defaultOption="Select Period Type"
        data-period-type
        options={["days", "weeks", "months"]}
        onChange={onChange}
        error={errors.periodType}
      />

      <button data-go-estimate type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

EstimatorForm.propTypes = {
  estimator: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default EstimatorForm;
