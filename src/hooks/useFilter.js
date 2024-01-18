import moment from "moment";
import { useEffect, useState } from "react";

export default function useFilter () {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [filterType, setFilterType] = useState();
    const [data, setData] = useState({});
    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
        setPage(value);
    }

    useEffect(() => {
        setData({
            'fromdate': from,
            'todate': to,
            'page': page || 1,
        });
    }, [from, to, page]);

    const handleFrom = (e) => {
        setFrom(e.target.value);
    }

    const handleTo = (e) => {
        setTo(e.target.value);
    }

    const handleFilterType = (e) => {
        setFilterType(e.target.value);
        const currentDay = moment(new Date()).format('YYYY-MM-DD');
        if (e.target.value == 1) {
            setFrom(currentDay);
            setTo(currentDay);
        } else if (e.target.value == 2) {
            const today = moment(new Date());
            const lastSevenDays = moment(new Date(today.set("date",today.get("day") - 7))).format('YYYY-MM-DD');
            setFrom(lastSevenDays);
            setTo(currentDay);
        } else if (e.target.value == 3) {
            const today = moment(new Date());
            const lastMonth = moment(new Date(today.set("date",today.get("date") - 30))).format('YYYY-MM-DD');
            setFrom(lastMonth);
            setTo(currentDay);
        }
    };


    const handleRefresh = () => {
        setFrom('');
        setTo('');
        setPage(1);
        setData({
            'fromdate': '',
            'todate': '',
            'page': 1,
        });
    };

    return {
        data, handlePageChange, handleFrom, handleTo, handleFilterType, handleRefresh
    };
}
