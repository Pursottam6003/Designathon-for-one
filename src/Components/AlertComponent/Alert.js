import { ReactComponent as DismissIcon } from "../../images/icons/cross.svg";
import { ReactComponent as ErrorIcon } from '../../images/icons/error.svg';
import { ReactComponent as SuccessIcon } from '../../images/icons/success.svg';
import { ReactComponent as WarningIcon } from '../../images/icons/warning.svg';
import { ReactComponent as InfoIcon } from '../../images/icons/info.svg';

import styles from "./Alert.module.scss";
import cx from "classnames";
import { useEffect, useState } from "react";

const Icon = ({ severity }) => {
    if (severity === "success") return <SuccessIcon />;
    else if (severity === "warning") return <WarningIcon />;
    else if (severity === "error") return <ErrorIcon />;
    else return <InfoIcon />;
};

const Alert = ({ severity = "info", message = "", handleDismiss = null }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!message.length) return;

        setIsVisible(true);
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 8000)

        return () => {
            clearTimeout(timeout);
        }
    }, [message])

    return (
            <div className={cx(styles.alert, styles[severity], { [styles.active]: isVisible})} >
                <div className={styles.icon}>
                    <Icon severity={severity} />
                </div>
                <div className={styles.message}>{message}</div>
                {handleDismiss && (
                    <button
                        type="button"
                        className={styles.dismiss}
                        onClick={handleDismiss}
                    >
                        <DismissIcon />
                    </button>
                )}
            </div>
    );
};

export default Alert;
