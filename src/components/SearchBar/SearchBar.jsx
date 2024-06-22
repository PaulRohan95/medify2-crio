import { Stack, TextField, Button } from '@mui/material';
import { useState, useMemo } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ list, filterList }) {
    const [inputText, setInputText] = useState('');

    const filteredList = useMemo(() => {
        if (!inputText.trim()) return list;
        return list.filter((item) => 
            item["Hospital Name"].toLowerCase().includes(inputText.trim().toLowerCase())
        );
    }, [inputText, list]);

    const handleSubmit= (event) => {
        event.preventDefault();
        filterList(filteredList);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack direction='row' spacing={2}>
                <TextField type='text' label='Search By Hospital' variant='outlined'  fullWidth value={inputText} onChange={(event) => setInputText(event.target.value)} inputProps={{ maxLength: 100 }} />
                    <Button type='submit' variant='contained' size='large' startIcon={<SearchIcon />} sx={{ py: '15px', px: 8, flexShrink: 0 }} disableElevation>
                        Search
                    </Button>
            </Stack>
        </form>
    )
};

export default SearchBar;