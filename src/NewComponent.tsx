import React from "react";

type NewComponentProps = {
    currentMoney: Array<{
        banknots: string;
        value: number;
        number: string;
    }>;
    onHandler: (
        nameButton: "all" | 'RUBLS' | "Dollars"
    ) => void
}


const NewComponent = (props: NewComponentProps) => {
        return (
            <>
                <ul>
                    {
                        props.currentMoney.map((objFromMoneyArr, index) => {
                            return (
                                <li key={
                                    index
                                }
                                >
                                    <span>{objFromMoneyArr.banknots}</span>
                                    <span>{objFromMoneyArr.value}</span>
                                    <span>{objFromMoneyArr.number}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div style={{marginLeft: '35px'}}>
                    <button onClick={() => props.onHandler('all')}>all</button>
                    <button onClick={() => props.onHandler('RUBLS')}>RUBLES</button>
                    <button onClick={() => props.onHandler('Dollars')}>Dollars</button>
                </div>
            </>
        )
            ;
    }
;
export default NewComponent;
