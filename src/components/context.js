const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
const AccountContext = React.createContext();

function useAccount(){
    const context = React.useContext(AccountContext)
    if (!context){
        throw new Error("useAccount must be wrapped by AccountContextProvider")
    }
    return context
}

function AccountContextProvider({children}){
    const [balance, setBalance] = React.useState(0);
    const value = {balance, setBalance}
    return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
}



export {useAccount}
export default AccountContextProvider