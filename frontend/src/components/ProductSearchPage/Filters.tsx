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
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault()
    const tempFilters = [...props.filters]

    const cid = e.currentTarget.id

    const [eType, eId, filterIndex] = cid.split('_')

    if (eType === "color") {
        if (tempFilters[parseInt(filterIndex)].selected.includes(eId)) {
            const eIdIndex = tempFilters[parseInt(filterIndex)].selected.indexOf(eId)
            tempFilters[parseInt(filterIndex)].selected.splice(eIdIndex, 1)
        } else {
            tempFilters[parseInt(filterIndex)].selected.push(eId)
        }
    }

    props.setFilters(tempFilters)
  };

  return (
    <div className="filters">
      {props.filters.map((filter, ind1) => (
        <div key={`filter_${ind1}`} className="filter">
          <h4>{filter.name[0].toUpperCase()}{filter.name.slice(1, filter.name.length)}</h4>
          {filter.type === "color-list" ? (
            <div className="color-list">
              {filter.list?.map((color, ind2) => (
                <div
                  key={`color_${ind2}`}
                  id = {"color_" + color + "_" + ind1}
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
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
