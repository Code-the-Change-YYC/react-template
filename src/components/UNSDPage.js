import React from "react";

const UNSD = () => (
  <>
    <h1>
      UNSD SDGs API
    </h1>
    <p>
      The UN SDG (Sustainable Development Goals) API returns official SDG data, including paginated observations about each goal.
      You can find documentation for the API <a href="https://unstats.un.org/sdgapi/swagger/#/" target="_blank" rel="noopener noreferrer">
        here</a>.
    </p>
    <h2>Example Introduction</h2>
    <p>
      In this example, we'll examine how to use the API to examine what kind of data is available, and narrow it down to a single data series.
      Afterwards, we'll example the data series for "Average share of the built-up area of cities that is open space for public use for all,
      by sex, age and persons with disabilities".
    </p>
    <h2>1. Viewing SDG targets</h2>
    <p>
      We can ping the <code>/sdg/Target/List</code> API endpoint to gather a list of targets for the SDGs. We will use this
      to refine our search later on.
    </p>
    <h2>2. Viewing SDG target indicators</h2>
    <p>
      After selecting a target of interest, in our case Target 11.7, we can examine what indicators are related to that target.
      We can do this by pinging the <code>/sdg/Target/${'<target-code>'}/Indicator/List</code> endpoint.
    </p>
    <h2>3. Viewing indicator data series</h2>
  </>
)

export default UNSD;