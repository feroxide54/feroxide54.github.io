import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const element = 
<>
<h1 className="is-size-1 has-text-centered has-text-weight-medium">
    Mirebi
</h1>
<p className='has-text-centered has-text-weight-medium'>
    Where a lot is done, A lot less accomplished!!
</p>
</>

const root = ReactDOM.createRoot(
    document.getElementById('app')
);
root.render(element)