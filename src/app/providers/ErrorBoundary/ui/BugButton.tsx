import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui';


export const BugButton: FC = () => {
    const [error, setError] = useState(false);

    const onError = () => {
        setError(prev => !prev);
    };

    useEffect(() => {
        if(error) {
            throw undefined;
        }
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onError}>
          BugButton
        </Button>
    );
};
