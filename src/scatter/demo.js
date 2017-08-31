/* globals scatterChart */
var chart = d3.select(".scatter.data")
    .append("svg")
      .attr("id", "demo");

i18n.load(["i18n"], function() {
  var settings;

  settings = {
    alt: i18next.t("alt", {ns: "scatter"}),
    url: "data/oldfaithful.json",
    datatable: {
      title: i18next.t("datatableTitle", {ns: "scatter"})
    },
    filterData: function(data) {
      return data.oldfaithful;
    },
    x: {
      label: i18next.t("x_label", {ns: "scatter"}),
      getValue: function(d) {
        return d.eruptions;
      }
    },

    y: {
      label: i18next.t("y_label", {ns: "scatter"}),
      getValue: function(d) {
        return d.waiting;
      }
    },

    z: {
      label: i18next.t("z_label", {ns: "scatter"}),
      getId: function(d) {
        return d.id;
      },
      getText: function(d) {
        return this.z.getId.apply(this, arguments);
      }
    },
    width: 900,
    pointRadius: 3
  };

  scatterChart(chart, settings);
});
