import { useState, useEffect, useCallback } from "react";

const DropdownClicks = (dropdown, actionElement) => {
  dropdown = dropdown.current;
  actionElement = actionElement.current;

  const [openState, setOpenState] = useState(false);

  const toggleDropdown = useCallback(
    toggleState => {
      setOpenState(
        toggleState !== undefined ? Boolean(toggleState) : !openState
      );
    },
    [openState]
  );

  const onWindowClick = useCallback(
    ev => {
      const clickOnAction =
        actionElement &&
        (ev.target === actionElement || actionElement.contains(ev.target));
      const clickOnDrop =
        dropdown && (ev.target === dropdown || dropdown.contains(ev.target));
      if (!clickOnAction && !clickOnDrop && openState === true)
        toggleDropdown(false);
    },
    [openState]
  );

  const onEsc = useCallback(
    ev => {
      if (ev.keyCode === 27 && openState === true) {
        toggleDropdown(false);
      }
    },
    [openState]
  );

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => window.removeEventListener("click", onWindowClick);
  });

  useEffect(() => {
    window.addEventListener("keyup", onEsc);
    return () => window.removeEventListener("keyup", onEsc);
  });

  return [openState, toggleDropdown];
};

export default DropdownClicks;
