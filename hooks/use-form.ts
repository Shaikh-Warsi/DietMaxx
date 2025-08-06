import { useState } from 'react';
import { FormData } from '@/types/form';

interface UseFormOptions {
  initialValues: FormData;
  onSubmit?: (values: FormData) => Promise<void>;
  validate?: (values: FormData) => Record<string, string> | null;
}

export function useForm({ initialValues, onSubmit, validate }: UseFormOptions) {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  
  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => {
      if (field === 'age' || field === 'weight') {
        return { ...prev, [field]: Number(value) };
      }
      return { ...prev, [field]: value };
    });
    
    // Clear error for this field when it changes
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
    setLoading(false);
  };

  const validateForm = (): boolean => {
    if (!validate) return true;
    
    const validationErrors = validate(formData);
    if (validationErrors) {
      setErrors(validationErrors);
      return false;
    }
    
    setErrors({});
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return false;
    
    if (onSubmit) {
      setLoading(true);
      try {
        await onSubmit(formData);
        return true;
      } catch (error) {
        console.error('Form submission error:', error);
        return false;
      } finally {
        setLoading(false);
      }
    }
    
    return true;
  };

  return {
    formData,
    errors,
    loading,
    handleInputChange,
    resetForm,
    handleSubmit,
    validateForm,
  };
}