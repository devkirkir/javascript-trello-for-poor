const updateModel = (elem, data) => {
    elem.dispatchEvent(
        new CustomEvent("updateModel", {
            bubbles: true,
            detail: { ...data },
        })
    );
};

export default updateModel;
