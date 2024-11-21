import { useState, useCallback } from 'react';

const useForm = (options = {}) => {
  const { 
    initialValues = {}, 
    validationRules = {}, 
    onSubmit 
  } = options;

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation rules handler
  const validate = useCallback((name, value) => {
    const rules = validationRules[name];
    if (!rules) return '';

    // Common validation rules
    const validations = {
      required: (val) => (val ? '' : 'This field is required'),
      minLength: (val, length) => 
        val.length >= length ? '' : `Minimum ${length} characters required`,
      maxLength: (val, length) => 
        val.length <= length ? '' : `Maximum ${length} characters allowed`,
      pattern: (val, pattern) => 
        pattern.test(val) ? '' : 'Invalid format',
      email: (val) => 
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? '' : 'Invalid email address',
      match: (val, fieldName) => 
        val === formData[fieldName] ? '' : `Must match ${fieldName}`,
      custom: (val, fn) => fn(val) ? '' : 'Invalid value'
    };

    // Check each rule
    for (const [rule, ruleValue] of Object.entries(rules)) {
      const validationResult = validations[rule](value, ruleValue);
      if (validationResult) return validationResult;
    }

    return '';
  }, [formData, validationRules]);

  // Handle input changes
  const handleChange = useCallback((event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Validate on change if field was touched
    if (touched[name]) {
      const error = validate(name, newValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  }, [touched, validate]);

  // Handle input blur
  const handleBlur = useCallback((event) => {
    const { name, value } = event.target;

    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validate(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [validate]);

  // Validate all fields
  const validateAll = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(name => {
      const error = validate(name, formData[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validate]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Mark all fields as touched
    const touchedFields = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(touchedFields);

    try {
      if (validateAll() && onSubmit) {
        await onSubmit(formData);
      }
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: error.message
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  // Set specific field value
  const setFieldValue = useCallback((name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue
  };
};

export default useForm;
