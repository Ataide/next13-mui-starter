import { useState } from "react";
import { Switch, Tooltip, useMediaQuery, Checkbox, FormControlLabel} from "@mui/material";

interface ThemeSwitcherOptions {
  useOs?: boolean;
  useDark?: boolean;
  darkPrompt?: string;
  osPrompt?: string;
  tooltipText?: string;
  themeChanger: (useDark: boolean) => void;
}

export default function ThemeSwitcherComponent(props: ThemeSwitcherOptions) {
  //const { prompt, useOs, useDark } = props;

  const expandedProps = {
    ...props,
    useOs: props.useOs || false,
    useDark: props.useDark || false,
    darkPrompt: props.darkPrompt || "",
    osPrompt: props.osPrompt || "Use OS preference",
    tooltipText: props.tooltipText || "OS preference: "
  };

  const [state, setState] = useState(expandedProps);

  const handleCheck = (_e: any, checked: boolean) => {
    setState({ ...state, useOs: checked });
    state.themeChanger(checked ? false : state.useDark);
   
  };

  const handleSwitch = (_e: any, checked: boolean) => {
    setState({ ...state, useDark: checked });
    state.themeChanger(checked);
    
  };

  // Get OS-level preference for dark mode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)") || false;

  return (
    <>
      <FormControlLabel
        labelPlacement="end"
        style={{marginRight:0}}
        label={state.darkPrompt}
        control={
          <Switch
            checked={state.useDark}
            onChange={handleSwitch}
          />
        }
      />
    </>
  );
}
