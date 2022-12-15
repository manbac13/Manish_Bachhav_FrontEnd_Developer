import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchCompo = () => {

    const [option, setOption] = useState("");
    const [getSearch, setGetSearch] = useState({})

    console.log(option)

    return (
        <>
            <section className='search-main-section'>
                <InputGroup className="mb-3" style={{ width: "80%", margin: "auto", paddingTop: "25px" }}>
                    <Form.Select onChange={e => setOption(e.target.value)} aria-label="Default select example">
                        <option>Select Option...</option>
                        <option value="active">Active</option>
                        <option value="rocket_name">Rocket_Name</option>
                        <option value="engine_type">Engine_Type</option>
                    </Form.Select>

                    <Form.Control style={{ backgroundColor: "#f2f2f2", width: "30%", margin: "auto", marginInlineStart: "25px" }} placeholder="Search..." aria-label="Text"
                        onChange={e => setGetSearch({ ...getSearch, search: e.target.value })}
                    />

                </InputGroup>
            </section>
        </>
    )
}

export default SearchCompo;