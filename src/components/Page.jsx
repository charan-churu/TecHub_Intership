import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faPlus,faBell, faUser, faFloppyDisk, faLayerGroup, faFilter, faHome, faFileLines, faPager, faSyringe, faMoneyBill, faPeopleGroup, faChartBar, faFlask, faArrowDown, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import './Page.css';
function Page() {
  return (
    <div className='body'>

      <header>

        <div className='A1'>
          <select id="pets">
              <option value="Patients">Patients</option>
              <option value="staff">Staff</option>
          </select>
          <input type="search" placeholder='Search'/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search' />
          
          <button><FontAwesomeIcon icon={faPlus} /> Add New</button>
        </div>

        <div className='A2'>
          <FontAwesomeIcon icon={faBell} className='bell' />
          <div class="red-dot"></div>
          <FontAwesomeIcon icon={faUser} className='profile'/>
        </div>

      </header>

      <aside>
      <b>Dashboards</b> 
        <ul>
          <li><FontAwesomeIcon icon={faUser} /> <br /> Patients</li>
          <li><FontAwesomeIcon icon={faLayerGroup} /> <br /> HR</li>
          <li><FontAwesomeIcon icon={faFilter} /> <br /> Labs</li>
          <li><FontAwesomeIcon icon={faHome} /> <br /> Pharma</li>
        </ul>
        <b> Processes</b> 
        <ul >
          <li><FontAwesomeIcon icon={faFileLines} /> <br /> Registration</li>
          <li><FontAwesomeIcon icon={faPager} /> <br /> Consultation</li>
          <li><FontAwesomeIcon icon={faSyringe} /> <br /> Test & Reports</li>
          <li><FontAwesomeIcon icon={faMoneyBill} /> <br /> Billing</li>
        </ul>

      </aside>

      <article>
        <div className='heading'>
        <FontAwesomeIcon icon={faPeopleGroup} />  Consultants
        </div>

        <div className='F1'>Filters</div>
        <div class="triangle-right"></div>
        <div className='headin'>
          <select id="pets">
              <option value="Range">Select Range</option>
          </select>
          <input type="radio" name="x" />
          <label for="Summary">Summary</label>
          <input type="radio" name="x"/>
          <label for="Branch Wise">Branch Wise</label>
        </div>

        <div >
          <div className='icons'>
           <b> Consultant Count </b>
           <FontAwesomeIcon icon={faPeopleGroup} className='ins'/> <br />
            <strong> 90/900 </strong>
            <p>Today/Period</p>
           
          </div>

          <div className='icons'>
           <b> Consultations </b> 
           <FontAwesomeIcon icon={faChartBar} className='ins'/> <br />
            <strong> 11/25 </strong>
            <p>Today/Period</p>
            
          </div>

          <div className='icons'>
           <b>Labs </b> 
           <FontAwesomeIcon icon={faFlask} className='ins'/> <br />
            <strong> 25/560 </strong>
            <p>Today/Period</p>
            
          </div>

          <div className='icons'>
           <b> Diet Plans </b> 
           <FontAwesomeIcon icon={faMoneyBill} className='ins'/> <br />
            <strong> 25/250 </strong>
            <p>Today/Period</p>
            
          </div>
        </div>
      </article>

      <footer>
        

        <div className='C1'>
        <b className='H1'>Consultants</b>
        <FontAwesomeIcon icon={faArrowDown} className='in'/>
        <FontAwesomeIcon icon={faArrowRight} className='in' />
        </div>

        <div className='table'>
          <table style={{width:'90%', height:'100%'}}>
            <tr>
              <th>Name</th>
              <th>Patient Count</th>
              <th>Labs</th>
              <th>Diet Plans</th>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>12</td>
              <td>3</td>
              <td>6</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>8</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Mark Johnson</td>
              <td>6</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Mary Lee</td>
              <td>10</td>
              <td>6</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Dabid chen</td>
              <td>5</td>
              <td>9</td>
              <td>3</td>
            </tr>
          </table>
        </div>
      </footer>
    </div>
  )
}

export default Page
