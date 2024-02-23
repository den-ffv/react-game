import { useState, useEffect } from "react";
import { FIELD} from "../../constants.js";

export default function useGameInit(number) {
    let [fields, setFields] = useState([]);

    const init = () => {
        setFields([])
        const newFields = [];
        for (let i = 0; i < number; i++) {
            newFields.push({
                id: i,
                clicked: false,
                value: FIELD.EMPTI,
            });
        }
        setFields(newFields)
    };
    useEffect(() => {
        init()
    }, [number]);

    return {fields, setFields, init};
}
