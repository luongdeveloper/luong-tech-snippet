import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

type Props = {};
const useStyle = makeStyles((theme) => ({}));
function TestMaterialSnippet(props: Props) {
    const classes = useStyle();
    const [state, setState] = useState();
    useEffect(() => {
        return () => {};
    }, []);

    return <Grid></Grid>;
}

export default React.memo(TestMaterialSnippet);
