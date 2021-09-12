import { createContext, useEffect, useState } from "react";
import { addPoints } from "../../services/addPoints";
import { getUser } from "../../services/getUser";
import { User } from "../../types/types";

interface ContextProps {
    user: User;
    loadComplete: Boolean;
    addPoint: () => void;
    setUser: (user: User) => void;
}

interface Props {
    children: JSX.Element
}

export const UserContext = createContext({} as ContextProps);

export const UserProvider: React.FC<Props> = ({ children }) => {
    
    const [user, setUser] = useState<User>({} as User)
    
    const [loadComplete, setLoadComplete] = useState<Boolean>(false)

    const loadUser = ():void => {
        try{
            getUser.then(res => {
                setUser(res.data)
                setLoadComplete(true)
            }).catch(err => console.log(err))
        }catch (err){
            console.log(err)
        }
    }

    const addPoint = ():void => {
        if(!(user.points > 15000)){
            addPoints(1000).then(res => {
                const newUser = {...user, points: res.data["New Points"]}
                setUser(newUser)
            });
        }
    }

    useEffect(() => {
        loadUser();
    }, [])

    const data = {
        user, 
        loadComplete,
        addPoint,
        setUser
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}