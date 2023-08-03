import "../../styles/components/ProductSearchPage/filters.scss";

const Filters = (props: {
  filters: {
    name: string;
    type: string;
    list: string[];
    selected: string[];
    int0: number;
    int1: number;
  }[];
  setFilters: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        type: string;
        list: string[];
        selected: string[];
        int0: number;
        int1: number;
      }[]
    >
  >;
}) => {
  const colors = [
    {
      name: "white",
      hex: "#fff",
      text: "black",
    },
    {
      name: "black",
      hex: "#000",
      text: "white",
    },
    {
      name: "blue",
      hex: "#72aee6",
      text: "black",
    },
    {
      name: "red",
      hex: "#e67272",
      text: "black",
    },
    {
      name: "green",
      hex: "#72e67c",
      text: "black",
    },
    {
      name: "yellow",
      hex: "#e4e672",
      text: "black",
    },
    {
      name: "pink",
      hex: "#e672c3",
      text: "black",
    },
    {
      name: "purple",
      hex: "#9f72e6",
      text: "black",
    },
    {
      name: "grey",
      hex: "#d8d8d8",
      text: "black",
    },
  ];

  const SetFilterHandler = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const tempFilters = [...props.filters];

    const cid = e.currentTarget.id;

    const [eType, eId, filterIndex] = cid.split("_");

    if (eType === "color") {
      if (tempFilters[parseInt(filterIndex)].selected.includes(eId)) {
        const eIdIndex =
          tempFilters[parseInt(filterIndex)].selected.indexOf(eId);
        tempFilters[parseInt(filterIndex)].selected.splice(eIdIndex, 1);
      } else {
        tempFilters[parseInt(filterIndex)].selected.push(eId);
      }
    } else if (eType === "checkItem") {
      if (tempFilters[parseInt(filterIndex)].selected.includes(eId)) {
        const eIdIndex =
          tempFilters[parseInt(filterIndex)].selected.indexOf(eId);
        tempFilters[parseInt(filterIndex)].selected.splice(eIdIndex, 1);
      } else {
        tempFilters[parseInt(filterIndex)].selected.push(eId);
      }
    } else if (eType === "number") {
      if (eId === "numberItem0") {
        tempFilters[parseInt(filterIndex)].int0 = parseInt(
          // @ts-ignore
          e.currentTarget.value
        );
      } else if (eId === "numberItem1") {
        tempFilters[parseInt(filterIndex)].int1 = parseInt(
          // @ts-ignore
          e.currentTarget.value
        );
      }
    } else if (eType === "radioItem") {
      tempFilters[parseInt(filterIndex)].selected[0] = eId;
    }

    props.setFilters(tempFilters);
  };

  return (
    <div className="filters">
      {props.filters.map((filter, ind1) => (
        <div key={`filter_${ind1}`} className="filter">
          <h4>
            {filter.name[0].toUpperCase()}
            {filter.name.slice(1, filter.name.length)}
          </h4>
          {filter.type === "color-list" ? (
            <div className="color-list">
              {filter.list?.map((color, ind2) => (
                <div
                  key={`color_${ind2}`}
                  id={"color_" + color + "_" + ind1}
                  className="color"
                  style={{
                    backgroundColor: colors.filter(
                      (col) => col.name === color
                    )[0].hex,
                  }}
                  onClick={(e) => {
                    SetFilterHandler(e);
                  }}
                >
                  {filter.selected?.includes(color) ? (
                    <i
                      className="fa-solid fa-check"
                      style={{
                        color: colors.filter((col) => col.name === color)[0]
                          .text,
                      }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-check"
                      style={{
                        color: colors.filter((col) => col.name === color)[0]
                          .hex,
                      }}
                    ></i>
                  )}
                </div>
              ))}
            </div>
          ) : filter.type === "check-box" ? (
            <div className="check-box">
              {filter.list?.map((checkItem, ind2) => (
                <div
                  key={`checkItem_${ind2}`}
                  id={"checkItem_" + checkItem + "_" + ind1}
                  className="check-item"
                  onClick={(e) => {
                    SetFilterHandler(e);
                  }}
                >
                  {filter.selected?.includes(checkItem) ? (
                    <p>
                      <i className="fa-solid fa-square-check"></i>{" "}
                      {checkItem[0].toUpperCase() +
                        checkItem.slice(1, checkItem.length)}
                    </p>
                  ) : (
                    <p>
                      <i className="fa-regular fa-square-check"></i>{" "}
                      {checkItem[0].toUpperCase() +
                        checkItem.slice(1, checkItem.length)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : filter.type === "number-interval" ? (
            <div className="number-interval">
              <input
                className="input0"
                id={"number_numberItem0_" + ind1}
                type="number"
                placeholder="min"
                value={filter.int0}
                onChange={(e) => {
                  SetFilterHandler(e);
                }}
              />
              <input
                className="input1"
                id={"number_numberItem1_" + ind1}
                type="number"
                placeholder="max"
                value={filter.int1}
                onChange={(e) => {
                  SetFilterHandler(e);
                }}
              />
            </div>
          ) : filter.type === "radio" ? (
            <div className="radio">
              {filter.list?.map((radioItem, ind2) => (
                <div
                  key={`radioItem${ind2}`}
                  id={"radioItem_" + radioItem + "_" + ind1}
                  className="radio-item"
                  onClick={(e) => {
                    SetFilterHandler(e);
                  }}
                >
                  {filter.selected?.includes(radioItem) ? (
                    <p>
                      <i className="fa-solid fa-circle-dot"></i>{" "}
                      {radioItem[0].toUpperCase() +
                        radioItem.slice(1, radioItem.length)}
                    </p>
                  ) : (
                    <p>
                      <i className="fa-regular fa-circle-dot"></i>{" "}
                      {radioItem[0].toUpperCase() +
                        radioItem.slice(1, radioItem.length)}
                    </p>
                  )}
                </div>
              ))}
              <div
                id={"radioItem_none_" + ind1}
                className="radio-item"
                onClick={(e) => {
                  SetFilterHandler(e);
                }}
              >
                <p>
                  {filter.selected[0] === "none" ? (
                    <i className="fa-solid fa-circle-dot"></i>
                  ) : (
                    <i className="fa-regular fa-circle-dot"></i>
                  )}{" "}
                  None
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
