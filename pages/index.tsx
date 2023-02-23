import React, { useEffect, useState } from "react";
import { Button, FormControl } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import { useForm } from "react-hook-form";

interface D {
  initValue: any;
}

export default function Home() {
  const [initValue, setInitValue] = useState<any>();
  const setValue = () => {
    setInitValue({ name: "name", sdt: "sdt", b: undefined, c: null });
  };
  return (
    <>
      <Button   onClick={setValue}>Set default</Button>
      <FormContainer initValue={initValue} />
    </>
  );
}

const FormContainer: React.FC<D> = ({ initValue }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    setError,
    formState: { errors, defaultValues, isSubmitSuccessful },
  } = useForm({ values: initValue });
  const submit = (e: any) => {
    reset();
  };

  console.log("render");

  // useEffect(() => {
  //   console.log(1, initValue);
  //   reset(initValue);
  // }, [initValue]);

  const setValueClick = () => {
    setValue("name", "name set");
  };

  const setErrorClick = () => {
    setError("sdt", { message: "error sdt" });
  };
  const data = watch();
  console.log("watch", data);
  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormControl>
        <FormLabel>name</FormLabel>
        <Input {...register("name")} />
      </FormControl>
      <FormControl>
        <FormLabel>sdt</FormLabel>
        <Input {...register("sdt")} />
      </FormControl>
      <Button type="submit">submit</Button>
      <Button onClick={setValueClick}>setValue</Button>
      <Button onClick={setErrorClick}>set erro</Button>
    </form>
  );
};
