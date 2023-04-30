import {useForm} from 'react-hook-form';

const RegistrationForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <fieldset>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
      <input {...register("firstName", {required: true})} placeholder='enter name'/>
      {errors.firstName && <span>This field is required</span>}
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
    </fieldset>
  );
}

export default RegistrationForm;