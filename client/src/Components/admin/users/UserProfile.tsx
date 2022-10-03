import React from 'react';

interface data {
    user: any,
}

export default function UserProfile(props: { data: data }) {
    return (
        <div>
            {
                Object.keys(props.data.user).map((prop: string) => {
                    if (["name", "email", "plan", "status"].includes(prop)) return (
                        <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                            <p>{prop}:</p>
                            <p>{props.data.user[prop]}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
