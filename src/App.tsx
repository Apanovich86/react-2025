import PaginationComponent from "./components/Pagination/PaginationComponent.tsx";
import UsersComponent from "./components/some/UsersComponent.tsx";

const App= () => {
    return (
        <div>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default App;
