import { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { debounce } from "lodash";
import { Icon, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

interface SearchInputComponentProps {
  initialValue: string;
  label: string;
  placeholder: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInputComponent({
  initialValue,
  label,
  placeholder,
  setTerm,
}: SearchInputComponentProps) {
  const [localValue, setLocalValue] = useState(initialValue);
  const debounce_setSearchTerm = useRef(
    debounce(function (value) {
      setTerm(value);
    }, 500)
  ).current;

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={localValue}
      onChange={handleTextFieldChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Icon>
              <SearchIcon />
            </Icon>
          </InputAdornment>
        ),
      }}
    />
  );

  function handleTextFieldChange(event: any) {
    const { value } = event.target;

    setLocalValue(value);
    debounce_setSearchTerm(value);
  }
}
