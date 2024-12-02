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
          <th>Suggested</th>
          <th>Message</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar online placeholder">
                <div class="bg-neutral text-neutral-content w-10 rounded-full">
                  <span class="text-s">JC</span>
                </div>
              </div>
              <span>Jean Colette</span>
            </div>
          </td>
          <td>Vodka</td>
          <td>
            <div class="chat chat-start w-52 max-w-full">
              <div class="chat-bubble chat-bubble-primary">
                What kind of nonsense is this, just buy it
              </div>
            </div>
          </td>
          <td>12/16/2024</td>
          <td>
            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn btn-info m-1">Decisions</div>
              <ul
                tabindex="0"
                class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li><a>Accept</a></li>
                <li><a>Reject</a></li>
                <li><a>Thinking...</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar offline placeholder">
                <div class="bg-neutral text-neutral-content w-10 rounded-full">
                  <span class="text-s">CG</span>
                </div>
              </div>
              <span>Cy Ganderton</span>
            </div>
          </td>
          <td>Saucisse sèche</td>
          <td>
            <div class="chat chat-start">
              <div class="chat-bubble chat-bubble-primary">Stp... j'en ai besoin...</div>
            </div>
          </td>
          <td>12/16/2024</td>
          <td>
            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn btn-info m-1">Decisions</div>
              <ul
                tabindex="0"
                class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li><a>Accept</a></li>
                <li><a>Reject</a></li>
                <li><a>Thinking...</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <th>3</th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar online placeholder">
                <div class="bg-neutral text-neutral-content w-10 rounded-full">
                  <span class="text-s">HH</span>
                </div>
              </div>
              <span>Hart Hagerty</span>
            </div>
          </td>
          <td>Redbull</td>
          <td>
            <div class="chat chat-start w-52 max-w-full">
              <div class="chat-bubble chat-bubble-primary">POUR LA GAME DE CE SOIR !!</div>
            </div>
          </td>
          <td>12/5/2024</td>
          <td>
            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn btn-info m-1">Decisions</div>
              <ul
                tabindex="0"
                class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li><a>Accept</a></li>
                <li><a>Reject</a></li>
                <li><a>Thinking...</a></li>
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <th>4</th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar offline placeholder">
                <div class="bg-neutral text-neutral-content w-10 rounded-full">
                  <span class="text-s">BS</span>
                </div>
              </div>
              <span>Brice Swyre</span>
            </div>
          </td>
          <td>Baguette</td>
          <td>
            <div class="chat chat-start w-52 max-w-full">
              <div class="chat-bubble chat-bubble-primary">Pour le ptit dej =)</div>
            </div>
          </td>
          <td>8/15/2024</td>
          <td>
            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn btn-info m-1">Decisions</div>
              <ul
                tabindex="0"
                class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
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
          <th>Suggested</th>
          <th>Message</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
