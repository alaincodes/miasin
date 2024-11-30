<template>
  <div class="flex justify-end my-6">
    <div class="join">
      <div>
        <div>
          <input class="input input-bordered join-item" placeholder="Search" />
        </div>
      </div>
      <select class="select select-bordered join-item">
        <option disabled selected>Filter</option>
        <option>Meat</option>
        <option>Drinks</option>
        <option>Delicatessen</option>
      </select>
      <div class="indicator">
        <button class="btn join-item">Search</button>
      </div>
    </div>
  </div>
  <div class="overflow-x-auto">
    <table class="table table-l table-zebra">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Item</th>
          <th>Message</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Saucisse sèche</td>
          <td>Stp, j'en ai besoin</td>
          <td>12/16/2024</td>
          <td>
            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn btn-info m-1">Decisions</div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Accept</a></li>
                <li><a>Reject</a></li>
                <li><a>Thinking...</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Redbull</td>
          <td>Pour la game de ce soir !!</td>
          <td>12/5/2024</td>
          <td>
            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn btn-info m-1">Decisions</div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Accept</a></li>
                <li><a>Reject</a></li>
                <li><a>Thinking...</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Baguette</td>
          <td>Pour le petit dej</td>
          <td>8/15/2024</td>
          <td>
            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn btn-info m-1">Decisions</div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Accept</a></li>
                <li><a>Reject</a></li>
                <li><a>Thinking...</a></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Item</th>
          <th>Message</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
