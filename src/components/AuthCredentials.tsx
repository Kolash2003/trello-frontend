import { Button } from "./Button"
import { Center } from "./Center"


export function AuthCredentials() {
    return (
        <>  
            <Center>
                <h1>Login to trello</h1>
                <div>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <div style={{marginTop: "20px", display: "flex", justifyContent: "center"}}>
                    <Button>Login</Button>
                </div>
            </Center>
        </>
    )
}