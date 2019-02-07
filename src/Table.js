import React, { Component } from 'react';

class Table extends Component {
    render(){
        return(
            <body>
                <div name = "table">

                    <table width="100%">
                        <tr>
                            <th>Trainee (ID)</th>
                            <th>Completed Courses</th>
                        </tr>
                        <tr>
                            <td>Jim Bob Murphy (49)</td>
                            <td>SQL, Java8</td>
                        </tr>
                        <tr>
                            <td>Max Branning (228)</td>
                            <td>C++</td>
                        </tr>
                        <tr>
                            <td>Chris Perrins (59)</td>
                            <td>Automated testing, Java8</td>
                        </tr>
                    </table>
                    
                </div>
            </body>

        );
    }
}
export default Table